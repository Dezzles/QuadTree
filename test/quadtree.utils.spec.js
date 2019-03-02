const {expect} = require('chai');
const { QuadTree, Rectangle, Point } = require('../quadtree');

describe('quadtree utilities', () => {
  let quadtree;
  let p1;
  let p2;
  let p3;
  let p4;
  let p5;
  let p6;
  let p7;
  let p8;
  let notInTree;
  createPoint = (x, y) => {
    let p = new Point(x, y);
    quadtree.insert(p);
    return p;
  }

  beforeEach(() => {
    let boundary = new Rectangle(0, 0, 800, 600);
    quadtree = new QuadTree(boundary, 4);
    p1 = createPoint(-10, -10);
    p2 = createPoint(10, -10);
    p3 = createPoint(-10, 10);
    p4 = createPoint(10, 10);
    p5 = createPoint(-20, -20);
    p6 = createPoint(20, -20);
    p7 = createPoint(-20, 20);
    p8 = createPoint(20, 20);
    notInTree = new Point(0, 0);
  })

  describe('includes', () => {
    it('returns true for item in parent quadtree', () => {
      expect(quadtree.contains(p1)).to.equal(true);
    })
    it('returns true for item in first quadrant', () => {
      expect(quadtree.contains(p5)).to.equal(true);
    })
    it('returns true for item in second quadrant', () => {
      expect(quadtree.contains(p6)).to.equal(true);
    })
    it('returns true for item in third quadrant', () => {
      expect(quadtree.contains(p7)).to.equal(true);
    })
    it('returns true for item in fourth quadrant', () => {
      expect(quadtree.contains(p8)).to.equal(true);
    })
    it('returns false for item not in QuadTree', () => {
      expect(quadtree.contains(notInTree)).to.equal(false);
    })
  })

  describe('every', () => {

  })

  describe('filter', () => {

  })

  describe('find', () => {

  })

  describe('reduce', () => {

  })

  describe('some', () => {

  })


})