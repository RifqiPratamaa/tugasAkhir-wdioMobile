export class SplashScreenPage {

    get splashLogo(){
        return $('#iv_splash')
    }
    
    get splashText(){
        return $('android.widget.TextView')
    }

}
export default new SplashScreenPage()