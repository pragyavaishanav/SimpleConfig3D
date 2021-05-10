import { Utils } from './components/system.js';
import { setMat, changeTexture } from './components/control.js';

const load_icon = document.getElementById("loader");
const canvas = document.getElementById('canvas');


const App = function () {

    this.engine = Utils.Engine(canvas);

    this.scene = Utils.Scene(this.engine);

    this.camera = Utils.Camera(this.canvas, this.scene);

}

Object.assign(App.prototype, {

    start: function () {

        Utils.Env(this.scene);

        this.loadModel();
    },


    loadModel: function () {

        Promise.all([

            BABYLON.SceneLoader.ImportMeshAsync(null, "./assets/110/", "110.obj", this.scene).then((result) => {
                console.clear();
                this.assets = result.meshes;

            }),
        ]).then(() => {
            this.assets.forEach(m => {

                if (m.material && m._material.name === 'FABRIC_1_FRONT_19305293')
                    setMat(m._material, this.scene);

                m.scaling = new BABYLON.Vector3(0.01, 0.01, 0.01)
            })

            load_icon.style.display = 'none';
            this.animate();

        });
    },


    animate: function () {
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
        window.addEventListener("resize", () => {
            this.engine.resize();
        });
    }

});

var app = new App();
app.start();

$('#color').change(() => {

    var n = parseInt($('#color').val());

    changeTexture(n);
    console.log(n)
})