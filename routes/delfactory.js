import	factoryCtr from '../api/delfactory'

export default function(router){
    router.delete('/factory',factoryCtr)
}