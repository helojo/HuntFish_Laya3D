import GComponent=fairygui.GComponent;
import Controller=fairygui.Controller;
import Handler=laya.utils.Handler;
import Loader=laya.net.Loader;
import GameFacade from "../../GameFacade";
import NetRoom from "../../net/ProtoHander/NetRoom";
import BasePanel from "./BasePanel";
import Sound from "../../constant/SoundNameConstant";
import CommonConstant from "../../constant/CommonConstant";

export default  class  GuidePanel extends BasePanel{
  private guideCom:GComponent;
  private cl:Controller;

    public constructor(){
        super();

        GameFacade.Instance.ResourceMng.loadUI(CommonConstant._fuiGuidePath.image,CommonConstant._fuiGuidePath.fui,this,this.onLoadSetting);
    }

    /**
     * 加载设置
     */
    private onLoadSetting():void{        
        this.guideCom=GameFacade.Instance.ResourceMng.getMainCom(CommonConstant._fuiGuidePath.Package,"Guide","GuideCom");
        fairygui.GRoot.inst.setChildIndex(this.guideCom,+2);
        this.cl=this.guideCom.getController("GuideCl");
        var closeBtn:fairygui.GButton=this.guideCom.getChild("close").asButton;
        closeBtn.onClick(this,()=>{this.onclose();} );

    }

    /**
     * 点击确认
     */
    private onclose():void{
          GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead,Sound.soundKeyArr.onClick);
          this.cl.selectedIndex=1;
          this.sentNovice();
          Laya.timer.once(300,this,this.onGearStop);
    }

    /**
     * 动画结束删除引导界面
     */
    private onGearStop():void{
        this.guideCom.dispose();
        GameFacade.Instance.ResourceMng.removeUIPackage(CommonConstant._fuiGuidePath.Package);
    }

    /**
     * 发送已经引导了给服务端
     */
    private sentNovice():void{       
      NetRoom.Instance.NovicePromptReq();  
    }
}
