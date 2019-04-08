import BaseManager from "./BaseManager";
import GameFacade from "../GameFacade";
import CommonConstant from "../constant/CommonConstant";
import { utils } from "../utils/CommonUtil";

export default class OtherManager extends BaseManager {
    /**活动是否结束 */
    public isActEnd: boolean = false;

    /**是否有成长基金面板 */
    public isHaveGrowthFundPane = false;
    /**是否有等级基金面板 */
    public isHaveLevelBonusPanel = false;
    /**是否有个人成长信息面板 */
    public isHavePersonInfoPanel = false;
    /**是否有帮助界面 */
    public isHaveHelpPanel = false;
    /**是否有排行榜界面 */
    public isHaveRankPanel = false;
    /**是否有设置面板 */
    public isHaveSettingPanel = false;
    /**是否有jp面板 */
    public isHaveJpPanel = false;
    constructor() {
        super();
    };
    public Init() {

    }
}