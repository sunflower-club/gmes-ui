import { Box3, Vector3, Vector2, BufferAttribute } from 'three';

const box = new Box3();

function getSize( object ) {

    box.setFromObject( object );

    return box.getSize();
}

function getCenter( object ) {

    box.setFromObject( object );

    return box.getCenter();
}
export { getSize, getCenter, toIndexed }
