import React, { Component } from 'react'
// import * as SVG from 'svg.js
import 'svg.js'
import 'svg.resize.js'
// import '@svgdotjs/svg.draggable.js'
import 'svg.draggable.js'
import 'svg.select.js'
import 'svg.draw.js'


const { SVG } = window

interface IAppProps {
  name: string
  age: number
  handle: () => void
}

class App extends Component<IAppProps, any>{
  render(){
    console.log(window)
      if (SVG.supported) {
          //
          console.log(SVG)
          var drawing = SVG('drawing').size(800, 800)

          // 可编辑的polygon
          // let polygon = drawing.polygon([[550,10],[600,10],[630,50],[600,100],[550,100],[520,50]]) // 点的位置
          //     .fill("rgba(0, 66, 255, .2)")
          //     .stroke("rgba(0, 66, 255, 1)")
          //     // .animate(1000).plot([ // 动画
          //     //     [0, 0],
          //     //     [100, 50],
          //     //     [50, 100],
          //     //     [150, 50],
          //     //     [200, 50]
          //     // ])
          //     .selectize(true, {
          //         deepSelect: true,
          //         pointSize: 8,
          //         classRect: 'svg_select_boundingRect',
          //         // pointType: 'rect',
          //         pointType(cx: number, cy: number): SVG.Rect {
          //             const rect: SVG.Rect = this.nested
          //                 .rect(6, 6)
          //                 .center(cx, cy)
          //                 .stroke('rgba(0, 66, 255, 1)')
          //                 .fill('white')
          //                 .attr({
          //                     'stroke-width': 1,
          //                 });
          //             return rect
          //         }
          //     }).resize()

          // 拖拽点为圆点
          // let polygon = drawing.polygon([[550,10],[600,10],[630,50],[600,100],[550,100],[520,50]]) // 点的位置
          //     .fill("rgba(0, 66, 255, .2)")
          //     .stroke("rgba(0, 66, 255, 1)")
          //     .selectize(true, {
          //         deepSelect: true,
          //         pointSize: 20,
          //         pointType(cx: number, cy: number): SVG.Circle {
          //             const circle: SVG.Circle = this.nested
          //                 .circle(this.options.pointSize)
          //                 .stroke('rgba(0, 66, 255, 1)')
          //                 .fill('white')
          //                 .center(cx, cy)
          //                 .attr({
          //                     'r': 4,
          //                     'stroke-width': 1,
          //                 });
          //             return circle
          //         },
          //     }).resize()

          // 可编辑的rect

          // skew(x,y) 扭曲: rect.skew(0, 45)
          // scale(x,y) 缩放: rect.scale(0.5, -1)
          // translate() 移动: rect.translate(50, 50)
          // var rect = drawing.rect(100, 100)
          //     .attr({
          //         fill: 'rgba(255, 255, 255, 1)',
          //         'fill-opacity': 0.5,
          //         stroke: 'rgba(0, 66, 255, 1)',
          //         'stroke-width': 1
          //     })
          //     // .stroke('rgba(0, 66, 255, 1)')
          //     // .fill('rgba(255, 255, 255, 1)')
          //     .transform({
          //         rotation: 125, //设置初始旋转角度
          //         relative: true //默认的变换是absolute,在原始基础上变换,指定为relative,在当前状态的基础上接着变换，设置的属性值会累加
          //     })
          //     .selectize(true, {
          //         // deepSelect: true,
          //         rotationPoint: false,  // 旋转框
          //         pointSize: 20,
          //         pointType(cx: number, cy: number): SVG.Circle {
          //             const circle: SVG.Circle = this.nested
          //                 .circle(this.options.pointSize)
          //                 .stroke('black')
          //                 .fill('white')
          //                 .center(cx, cy)
          //                 .attr({
          //                     'r': 4,
          //                     'stroke-width': 1,
          //                 });
          //             return circle
          //         },
          //         classPoints: 'svg_select_points',
          //     }).resize()
          //
          // drawing.on('mousedown', function(event: any){
          //     rect.draw(event, {})
          //     rect.selectize(true, {
          //         deepSelect: true,
          //         pointSize: 20,
          //         rotationPoint: true,
          //         pointType(cx: number, cy: number): SVG.Circle {
          //             const circle: SVG.Circle = this.nested
          //                 .circle(this.options.pointSize)
          //                 .stroke('black')
          //                 .fill('white')
          //                 .center(cx, cy)
          //                 .attr({
          //                     'stroke-width': 1,
          //                 });
          //
          //             circle.node.addEventListener('mouseenter', (): void => {
          //                 circle.attr({
          //                     'stroke-width': circle.attr('stroke-width') * 2,
          //                 });
          //
          //                 circle.addClass('cvat_canvas_selected_point');
          //             });
          //
          //             circle.node.addEventListener('mouseleave', (): void => {
          //                 circle.attr({
          //                     'stroke-width': circle.attr('stroke-width') / 2,
          //                 });
          //
          //                 circle.removeClass('cvat_canvas_selected_point');
          //             });
          //
          //             return circle;
          //         },
          //     }).draggable(true).resize()
          // });
          //
          // drawing.on('mouseup', function(event: any){
          //     rect.draw(event);
          // });


          // polygon
          let polygon = drawing.polygon() // 点的位置
              .fill("rgba(0, 66, 255, .2)")
              .stroke("rgba(0, 66, 255, 1)")

          drawing.on('mousedown', function(event: any){
              console.log('enter 1', polygon.type)
              // polygon.draw(event, {})
              polygon.point(event, {})
              polygon.selectize(true, {
                  deepSelect: true,
                  pointSize: 8,
                  classRect: 'svg_select_boundingRect',
                  // pointType: 'rect',
                  // pointFill: "#fff",
                  // pointStroke: { width: 1, color: "#f00" }
                  pointType(cx: number, cy: number): SVG.Circle {
                      console.log('enter 123 shanshan', polygon.getPointArray)
                      const circle: SVG.Circle = this.nested
                          .circle(this.options.pointSize)
                          .stroke('red')
                          .fill('white')
                          .center(cx, cy)
                          .attr({
                              'r': 4,
                              'stroke-width': 1,
                          });
                      return circle
                  },
              }).resize()
          });

          drawing.on('mouseup', function(event: any){
              polygon.draw(event)
          });

          document.addEventListener('keydown', function(e){
              if(e.keyCode == 66){
                  polygon.draw('done')
                  console.log('finish', polygon.array().value)
              }
          })


          // 折线
          // var polyline = drawing.polyline([
          //     [0, 0],
          //     [100, 50],
          //     [50, 100],
          //     [130, 200]
          // ])
          // .fill('none').stroke({
          //     width: 2,
          //     color: 'red'
          // })
          // .selectize(true, {
          //     deepSelect: true,
          //     pointSize: 8,
          //     classRect: 'svg_select_boundingRect',
          //     // pointType: 'rect',
          //     pointType(cx: number, cy: number): SVG.Rect {
          //         const rect: SVG.Rect = this.nested
          //             .rect(6, 6)
          //             .center(cx, cy)
          //             .stroke('rgba(0, 66, 255, 1)')
          //             .fill('white')
          //             .attr({
          //                 'stroke-width': 1,
          //             });
          //         return rect
          //     }
          // }).resize()


          //拖拽还有问题
          // var draw = SVG('drawing').size(400, 400)
          // var rect = draw.rect(100, 100)
          // rect.draggable()

      }else{
          alert("浏览器不支持SVG！")
      }
    const { name, age, handle } = this.props
    return(
      <div onClick={handle}>{name}:{age}
        <div id="drawing"></div>
      </div>
    )
  }
}

export default App