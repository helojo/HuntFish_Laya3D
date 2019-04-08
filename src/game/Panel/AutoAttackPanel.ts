import BasePanel from "./BasePanel";
import SelectPanel from "./SelectPanel";
import GameFacade from "../../GameFacade";
import HuntedPanel from "./HuntedPanel";
import EnumData from "../../Enum/EnumData";
import GameEvent from "../../constant/GameEvent";
import Sound from "../../constant/SoundNameConstant";

export default class AutoAttackPanel extends BasePanel {
    private m_selectPanel: SelectPanel;
    private m_huntedPanel: HuntedPanel;

    constructor(id) {
        super();

        this.m_fui = fairygui.UIPackage.createObject("HunterUI", "AutoAttackPanel").asCom;
        GameFacade.Instance.SceneMng.AddFUI(this.m_fui);
        this.m_selectPanel = new SelectPanel(this.m_fui.getChild("SelectPanel").asCom, this);
        this.m_huntedPanel = new HuntedPanel(this.m_fui.getChild("HuntedPanel").asCom, this);
        this.m_nameID = id;
        this.m_fui.getChild("CloseBtn").asButton.onClick(this, this.OncloseBtnClick);

        GameFacade.Instance.EventMng.add(GameEvent.HUNT_HUNTEDFISH, this.m_huntedPanel, this.m_huntedPanel.OnHuntedFish);
    }

    public init() {
        this.m_fui.visible = true;
        if (GameFacade.Instance.HuntSceneMng._bAutoAttack) {
            this.ShowHuntedPanel();
        }
        else {
            this.ShowSelectPanel();
        }
        GameFacade.Instance.SceneMng.bProhibitWalletBtn = true;
    }

    public ShowHuntedPanel() {
        this.m_huntedPanel.ShowSelf(true);
        this.m_selectPanel.ShowSelf(false);
    }

    /**
     * ShowSelectPanel
     */
    public ShowSelectPanel() {
        this.m_huntedPanel.ShowSelf(false);
        this.m_selectPanel.ShowSelf(true);
    }

    public OncloseBtnClick() {
        this.m_fui.visible = false;
        this.m_selectPanel.RemoveUnuseSelectedItem();
        GameFacade.Instance.SceneMng.bProhibitWalletBtn = false;
        GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, Sound.soundKeyArr.onClose);
    }

    public ClearHuntedPanel() {
        this.m_huntedPanel.ClearPanel();
    }

    protected RemoveAllEvents() {
        GameFacade.Instance.EventMng.remove(GameEvent.HUNT_HUNTEDFISH, this.m_huntedPanel, this.m_huntedPanel.OnHuntedFish);
    }
}