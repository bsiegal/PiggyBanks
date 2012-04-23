/**
 * RoundedRect constructor.&nbsp; RoundedRects are defined by a the top-right point,
 * a width, height and radius of curve
 * @constructor
 * @augments Kinetic.Shape
 * @param {Object} config
 */
Kinetic.RoundedRect = function(config) {
    // default attrs
    if(this.attrs === undefined) {
        this.attrs = {};
    }
    this.attrs.cornerX = 0;
    this.attrs.cornerY = 0;
    this.attrs.width = 0;
    this.attrs.height = 0;
    this.attrs.radius = 0;
    
    this.shapeType = "RoundedRect";
    
    config.drawFunc = function() {
        var context = this.getContext();
        var x = this.attrs.cornerX;
        var y = this.attrs.cornerY;
        var r = this.attrs.radius;
        var w = this.attrs.width;
        var h = this.attrs.height;
        
        context.beginPath();
        context.arc(x + r, y + r, r, Math.PI, 3 * Math.PI / 2, false);
        context.lineTo(x + w - r, y);
        context.arc(x + w - r, y + r, r, 3 * Math.PI / 2, 0, false);
        context.lineTo(x + w, y + h - r);
        context.arc(x + w - r, y + h - r, r, 0, Math.PI / 2, false);
        context.lineTo(x + r, y + h);
        context.arc(x + r, y + h - r, r, Math.PI / 2, Math.PI, false);
        context.closePath();
        this.fillStroke();
    };
    // call super constructor
    Kinetic.Shape.apply(this, [config]);
};
/*
 * RoundedRec methods
 */
Kinetic.RoundedRect.prototype = {
    /**
     * set x coordinate of top-left corner
     * where a full rectangle would start
     * @param x
     */
    setCornerX: function(x) {
        this.attrs.cornerX = x;
    },
    /**
     * get x coordinate of top-left corner
     * where a full rectangle would start
     */
    getCornerX: function() {
        return this.attrs.cornerX;
    },
    /**
     * set y coordinate of top-left corner
     * where a full rectangle would start
     * @param y
     */
    setCornerY: function(y) {
        this.attrs.cornerY = y;
    },
    /**
     * get y coordinate of top-left corner
     * where a full rectangle would start
     */
    getCornerY: function() {
        return this.attrs.cornerY;
    },

    /**
     * set radius 
     * @param radius
     */
    setRadius: function(radius) {
        this.attrs.radius = radius;
    },
    /**
     * get radius
     */
    getRadius: function() {
        return this.attrs.radius;
    },
    /**
     * set width
     * @param width
     */
    setWidth: function(width) {
        this.attrs.width = width;
    },
    /**
     * get width
     */
    getWidth: function() {
        return this.attrs.width;
    },
    /**
     * set height
     * @param height
     */
    setHeight: function(height) {
        this.attrs.height = height;
    },
    /**
     * get height
     */
    getHeight: function() {
        return this.attrs.height;
    }
};

// extend Shape
Kinetic.GlobalObject.extend(Kinetic.RoundedRect, Kinetic.Shape);

 