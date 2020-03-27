const { ccclass, property } = cc._decorator

@ccclass
export default class EffectBaseManager extends cc.Component {
    static instance: EffectBaseManager = null

    onLoad() {
        EffectBaseManager.instance = this
        cc.dynamicAtlasManager.enabled = false
    }
}
