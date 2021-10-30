import * as THREE from "three";
import {
  CSS3DObject,
  CSS3DSprite
} from "three/examples/jsm/renderers/CSS3DRenderer";
import { element1, element2, element3 } from "./elements";
import getSetup from "./sceneSetup";

const object = new CSS3DObject(element2);
object.position.set(0, 0, 0);
object.rotation.set(0, 0, 0);
object.scale.set(1, 1, 1);

const sprite = new CSS3DSprite(element1);
sprite.position.set(1.3, 0, 0);
sprite.rotation.set(1, 1, 1);
sprite.scale.set(1, 1, 1);
sprite.rotation2D = 0;

const spriteChild = new CSS3DSprite(element3);
spriteChild.position.set(0, 0, 0);
spriteChild.rotation.set(1, 1, 1);
spriteChild.scale.set(0.9, 0.9, 0.9);
spriteChild.rotation2D = 0;

const group = new THREE.Group();
group.position.set(0, 0, 0);
group.rotation.set(0, 0, 0);
group.scale.set(1.5, 1.5, 1.15);

group.add(object);
group.add(sprite);
//sprite.add(spriteChild);
group.add(spriteChild);

// append group and start animating
const { scene, animate } = getSetup();
scene.add(group);
animate();
