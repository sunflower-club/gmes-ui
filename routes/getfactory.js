import	factoryCtr from '../api/getfactory'

export default function(router){
    router.get('/factory',factoryCtr)
}