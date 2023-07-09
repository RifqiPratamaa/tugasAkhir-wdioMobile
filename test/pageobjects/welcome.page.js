export class WelcomePage {

    get headerWelcome(){
        return $('#header_welcome')
    }

    get headerDesc(){
        return $('#tv_header_desc')
    }

    get inputName(){
        return $('//android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText')
    }

    get inputWeight(){
        return $('//android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText')
    }

    get inputHeight(){
        return $('//android.widget.LinearLayout[3]/android.widget.FrameLayout/android.widget.EditText')
    }

    get chooseGenderMale(){
        return $('#rb_male')
    }

    get chooseGenderFemale(){
        return $('#rb_female')
    }

    get buttonNext(){
        return $('#bt_next')
    }

    get chooseActivity(){
        return $('#rb_very_very_low')
    }

    get buttonFinish(){
        return $('#bt_finish')
    }

}
export default new WelcomePage()