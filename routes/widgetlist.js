import getWidgetCtr from '../api/widgetlist'

export default function(router){
    router.get('/widgetlist',getWidgetCtr)
}