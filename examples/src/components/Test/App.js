/**
 * Created by mac on 2017/12/7.
 */
function createComponent({template,data}) {
    //0
    //模板解析
    const renderTemplate = new Function('data',"return '<input value='+data+'/>");
    return{
        //1
        render(dom){
            //2
            let data
            function updateView() {

            }
            return {
                getData(){
                    //3
                },
                setData(){
                    //4

                }
            }

        }
    }
}

const TestComponent = createComponent({
    //html页面nodejs进行后台渲染，如果后台没有ajax请求的方法就报错
    //componentDidMount控制代码不执行，等页面渲染完再请求数据，生命周期中只执行一遍
    //ajax的使用
})