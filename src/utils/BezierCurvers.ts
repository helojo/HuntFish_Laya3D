export class BezierCurvers {
    /**
 * 根据贝塞尔公式求曲线上的点
 * @param gizmoPoints 点集
 * @param t (取值范围0-1)
 */
    public static GetPoint(gizmoPoints: Laya.Vector3[], t: number): Laya.Vector3 {
        let numSections = gizmoPoints.length - 3;
        let tSec = Math.floor(t * numSections);
        let currPt = numSections - 1;
        if (currPt > tSec) {
            currPt = tSec;
        }
        let u = t * numSections - currPt;
        let a = gizmoPoints[currPt];
        let b = gizmoPoints[currPt + 1];
        let c = gizmoPoints[currPt + 2];
        let d = gizmoPoints[currPt + 3];

        let newPoint: Laya.Vector3 = new Laya.Vector3(0, 0, 0);
        let au: Laya.Vector3 = new Laya.Vector3(0, 0, 0);
        let bu: Laya.Vector3 = new Laya.Vector3(0, 0, 0);
        let cu: Laya.Vector3 = new Laya.Vector3(0, 0, 0);
        let du: Laya.Vector3 = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.scale(a, -1 * u * u * u, au);
        Laya.Vector3.scale(b, 3 * u * u * u, bu);
        Laya.Vector3.scale(c, -3 * u * u * u, cu);
        Laya.Vector3.scale(d, 1 * u * u * u, du);
        Laya.Vector3.add(au, bu, newPoint);
        Laya.Vector3.add(newPoint, cu, newPoint);
        Laya.Vector3.add(newPoint, du, newPoint);

        Laya.Vector3.scale(a, 2 * u * u, au);
        Laya.Vector3.scale(b, -5 * u * u, bu);
        Laya.Vector3.scale(c, 4 * u * u, cu);
        Laya.Vector3.scale(d, -1 * u * u, du);
        Laya.Vector3.add(newPoint, au, newPoint);
        Laya.Vector3.add(newPoint, bu, newPoint);
        Laya.Vector3.add(newPoint, cu, newPoint);
        Laya.Vector3.add(newPoint, du, newPoint);

        Laya.Vector3.scale(a, -1 * u, au);
        Laya.Vector3.scale(c, 1 * u, cu);
        Laya.Vector3.add(newPoint, au, newPoint);
        Laya.Vector3.add(newPoint, cu, newPoint);

        Laya.Vector3.scale(b, 2, bu);
        Laya.Vector3.add(newPoint, bu, newPoint);

        Laya.Vector3.scale(newPoint, 0.5, newPoint);

        return newPoint;
    }
}