import { BaseModel } from "./BaseModel";

export class ConfigPreloadConfig extends BaseModel {
  get affiliateCode(): string {
    return this._getValue("default:affiliateCode");
  }

  get initialVolume(): number {
    return parseFloat(this._getValue("default:initialVolume"));
  }

  get initialMute(): boolean {
    return this._getValue("default:initialMute") === "true";
  }

  get initialSmoothing(): boolean {
    return this._getValue("default:initialSmoothing") === "true";
  }

  get pingBackTimerPrecision(): string {
    return this._getValue("default:pingBackTimerPrecision");
  }

  get pingBackTimerPeriod(): string {
    return this._getValue("default:pingBackTimerPeriod");
  }

  get pingBackIntervals(): number[] {
    const intervals = this._getValueOrUndefined("default:pingBackIntervals");
    if (intervals) {
      return intervals
        .split(" ")
        .map(x => parseFloat(x));
    } else {
      return [ 30000 ];
    }
  }
}