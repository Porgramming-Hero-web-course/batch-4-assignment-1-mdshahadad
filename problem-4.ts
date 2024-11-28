type Circle = {
    shape: 'circle';
    radius: number;
};

type Rectangle = {
    shape: 'rectangle';
    width: number;
    height: number;
};

type Shape = Circle | Rectangle;


const isCircle = (shape: Shape): shape is Circle => {
    return shape.shape === 'circle';
}

const isRectangle = (shape: Shape): shape is Rectangle => {
    return shape.shape === 'rectangle';
}


const calculateShapeArea = (shape: Shape): number | undefined => {
    if (isCircle(shape)) {
        return 3.1416 * shape.radius * shape.radius;

    } else if (isRectangle(shape)) {
        return shape.width * shape.height;
        
    } else {
        console.error('Wrong Input');
    }
};

const circle: Circle = {
    shape: 'circle',
    radius: 5,
};

const rectangle: Rectangle = {
    shape: 'rectangle',
    width: 10,
    height: 8,
};

const circleArea: number | undefined = calculateShapeArea(circle);
console.log(circleArea);

const rectangleArea: number | undefined = calculateShapeArea(rectangle);
console.log(rectangleArea);