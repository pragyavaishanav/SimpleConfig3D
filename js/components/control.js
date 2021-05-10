
const fileNames = [
    'muslin_4',
    'Denim_Seamless_Texture_6613',
    'Fabric_Seamless_Texture_2456',
    'Fabric_Seamless_Texture_2499',
    'Fabric_Seamless_Texture_2535'
];

const scale = [1, 0.3, 1, 1, 0.15];

let targetMat, scene;

const setMat = function (mat, _scene) {

    targetMat = mat;

    scene = _scene;
}

const changeTexture = function (n) {

    if (n < fileNames.length) {

        targetMat.diffuseTexture = new BABYLON.Texture(
            `assets/textures/${fileNames[n]}.jpg`,
            scene
        );

        targetMat.diffuseTexture.uScale = scale[n];
        targetMat.diffuseTexture.vScale = scale[n];

        targetMat.bumpTexture = new BABYLON.Texture(
            `assets/textures/${fileNames[n]}_normal.jpg`,
            scene
        );

        targetMat.bumpTexture.uScale = scale[n];
        targetMat.bumpTexture.vScale = scale[n];

    } else {
        console.error('No Texture Name')
    }
}

export { setMat, changeTexture };