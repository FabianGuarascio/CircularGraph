import {
  Component,
  ElementRef,
  Input,
  AfterViewInit,
  ChangeDetectorRef,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, style, transition, animate } from '@angular/animations';

type TDataPlusColor = { data: number; color: string };
type SvgInHtml = HTMLElement & SVGElement;
@Component({
  selector: 'app-circular-graph',
  standalone: true,
  imports: [CommonModule, BrowserAnimationsModule],
  templateUrl: './circular-graph.component.html',
  styleUrls: ['./circular-graph.component.css'],
  animations: [
    trigger('startOff', [
      transition('* => *', [
        style({ strokeDasharray: '0 100' }),
        animate('1s ease-out'),
      ]),
    ]),
  ],
})
export class CircularGraphComponent implements AfterViewInit {
  public rAttr = 0;
  /**
   * if you pass a number as a parameter it will be set the height and width in px
   * and it will not change when the window change size.
   */
  @Input() heightAndWidth: string | number = '100%';
  /**
   * Stroke With in px
   */
  @Input() strokeWidth = 15;
  @Input() data?: number[];
  @Input() colors = ['red', 'blue', 'green', 'orange', 'yellow', 'purple'];
  private _svg!: SvgInHtml;
  public dataPlusColorArr?: TDataPlusColor[];

  constructor(private el: ElementRef, private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this._svg = this.el.nativeElement.querySelector('svg');
    this.dataPlusColorArr = this.mergeArray();
    this.setRattr();
    this.cd.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (typeof this.heightAndWidth === 'number') return;
    this.setRattr();
  }

  mergeArray() {
    if (this.data) {
      const total = this.data.reduce((acc, curr) => {
        return acc + curr;
      }, 0);
      let sum = 0;
      const mergedArray = this.data.map((item, index) => {
        const stackedPercentageItem = item / total + sum;
        sum += item / total;
        return {
          data: stackedPercentageItem * 100,
          color: this.colors[index],
        };
      });

      mergedArray[mergedArray.length - 1].data += 1;
      return mergedArray.reverse();
    } else {
      return [{ data: 101, color: 'grey' }];
    }
  }

  setRattr() {
    const svgWidthPX = this._svg.clientWidth;
    const svgHeightPx = this._svg.clientHeight;
    let radio = 0;
    if (svgWidthPX < svgHeightPx) {
      radio = svgWidthPX / 2;
    } else {
      radio = svgHeightPx / 2;
    }
    this.rAttr = radio - this.strokeWidth / 2;
  }
}
