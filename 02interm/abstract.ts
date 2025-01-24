// interface TakePhoto{
//     cameraMode : string;
//     filter: string;
//     burst : number;
// }

// interface Story {
//     createStory(): void;
// }

// class Instagram implements TakePhoto {
//     constructor(
//         public cameraMode : string,
//         public filter : string,
//         public burst : number
//     ){
//         this.cameraMode = cameraMode;
//         this.filter = filter;
//         this.burst = burst;
//     }
// }

abstract class TakePhoto {
    constructor(
        public cameraMode : string,
        public filter : string,
    ){
        this.cameraMode = cameraMode;
        this.filter = filter;
    }

   abstract takePhoto(): void
}




class Instagram extends TakePhoto {
    constructor(
        cameraMode : string,
        filter : string,
        public burst : number
    ){
        super(cameraMode, filter);
        this.burst = burst;
    }
    takePhoto(): void {
        console.log('Take a photo');
    }
}
