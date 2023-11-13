import { Component } from "@angular/core";

@Component({
  selector: 'app-spinner',
  template: `
    <div class="spinner">
      <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>

      <div>Loading...</div>
    </div>
  `,
  styles: [`
    :host {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
    }

    .spinner {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
    }

    /*******************\
        Loading Roller
    \*******************/
    @-webkit-keyframes lds-roller {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    @keyframes lds-roller {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .lds-roller {
      position: relative;
      display: inline-block;
      height: 64px;
      width: 64px;
    }
    .lds-roller div {
      -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
              animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      transform-origin: 32px 32px;
    }
    .lds-roller div:after {
      position: absolute;
      display: block;
      background: #00539f;
      border-radius: 50%;
      content: " ";
      margin: -3px 0 0 -3px;
      height: 6px;
      width: 6px;
    }
    .lds-roller div:nth-child(1) {
      -webkit-animation-delay: -0.036s;
              animation-delay: -0.036s;
    }
    .lds-roller div:nth-child(1):after {
      top: 50px;
      left: 50px;
    }
    .lds-roller div:nth-child(2) {
      -webkit-animation-delay: -0.072s;
              animation-delay: -0.072s;
    }
    .lds-roller div:nth-child(2):after {
      top: 54px;
      left: 45px;
    }
    .lds-roller div:nth-child(3) {
      -webkit-animation-delay: -0.108s;
              animation-delay: -0.108s;
    }
    .lds-roller div:nth-child(3):after {
      top: 57px;
      left: 39px;
    }
    .lds-roller div:nth-child(4) {
      -webkit-animation-delay: -0.144s;
              animation-delay: -0.144s;
    }
    .lds-roller div:nth-child(4):after {
      top: 58px;
      left: 32px;
    }
    .lds-roller div:nth-child(5) {
      -webkit-animation-delay: -0.18s;
              animation-delay: -0.18s;
    }
    .lds-roller div:nth-child(5):after {
      top: 57px;
      left: 25px;
    }
    .lds-roller div:nth-child(6) {
      -webkit-animation-delay: -0.216s;
              animation-delay: -0.216s;
    }
    .lds-roller div:nth-child(6):after {
      top: 54px;
      left: 19px;
    }
    .lds-roller div:nth-child(7) {
      -webkit-animation-delay: -0.252s;
              animation-delay: -0.252s;
    }
    .lds-roller div:nth-child(7):after {
      top: 50px;
      left: 14px;
    }
    .lds-roller div:nth-child(8) {
      -webkit-animation-delay: -0.288s;
              animation-delay: -0.288s;
    }
    .lds-roller div:nth-child(8):after {
      top: 45px;
      left: 10px;
    }
  `]
})
export class SpinnerComponent {

}
