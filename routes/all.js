import all from '../api/all'

export default function(router){
    router.all('*', all)
}
