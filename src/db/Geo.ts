
export interface Rect {
    top:number,
    right:number,
    bottom:number,
    left:number
};

export class Geo {
    async db(): Promise<Rect> {
        return {
            top: 2,
            right: 4,
            bottom: 2,
            left: 4
        };
    }
}