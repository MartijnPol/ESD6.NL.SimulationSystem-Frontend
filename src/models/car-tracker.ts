import {Location} from './location';

/**
 * Class that contains all needed values for the CarTracker object
 */
export class CarTracker extends Object {

  constructor(public id?: string, public isDriving?: boolean, public manufacturer?: string, public lastLocation?: Location) {
    super();
  }

}
