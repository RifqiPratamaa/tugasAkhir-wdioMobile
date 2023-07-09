export class HomePage {

    get homeTitleHeader(){
        return $('#tv_header_name')
    }

    get homeDescriptionHeader(){
        return $('#tv_header_desc')
    }

    get buttonHome(){
        //findElement by ID
        return $('#navigation_bar_item_large_label_view')

        //findElement by xpath
        //return $('//android.widget.FrameLayout[@content-desc="Home"]/android.view.ViewGroup/android.widget.TextView')
    }
}
export default new HomePage()