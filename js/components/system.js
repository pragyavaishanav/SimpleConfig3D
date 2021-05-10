
const Utils = {

    Scene: function (engine) {

        const scene = new BABYLON.Scene(engine);
        // scene.debugLayer.show({ showExplorer: true, embedMode: true });

        return scene;
    },


    Engine: function (canvas) {
        const engine = new BABYLON.Engine(canvas, true, { preserveDrawingsBuffer: true, stencil: true });
        return engine;
    },


    Camera: function (canvas, scene) {

        const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2, 14, new BABYLON.Vector3(0, 12, 0), scene);

        camera.lowerBetaLimit = Math.PI / 2;
        camera.upperBetaLimit = Math.PI / 2;

        camera.lowerRadiusLimit = 14;
        camera.upperRadiusLimit = 14;

        camera.lockedTarget = new BABYLON.Vector3(0, 12, 0);

        camera.attachControl(canvas, true);

        camera.wheelPrecision = 100;

        return camera;
    },

    Env: function (scene) {

        scene.clearColor = new BABYLON.Color3(0.2, 0.5, 0.3); // this should be (1,1,1) for white

        const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
        light.intensity = 1;
        light.specular = BABYLON.Color3.Black();

        const dirLight = new BABYLON.DirectionalLight("light2", new BABYLON.Vector3(0, -0.5, -1.0), scene);
        dirLight.intensity = 0.5;

        const dirLight1 = new BABYLON.DirectionalLight("light3", new BABYLON.Vector3(0, -0.5, 1.0), scene);
        dirLight1.intensity = 0.5;

        const hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("assets/environment.dds", scene);
        hdrTexture.gammaSpace = false;
        // scene.environmentTexture = hdrTexture;

        const gl = new BABYLON.GlowLayer("glow", scene, {
            mainTextureSamples: 4,
            blurKernelSize: 20
        });
    }
}



export { Utils };