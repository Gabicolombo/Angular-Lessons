export class CounterService{
  activeToInactive = 0;
  inactiveToActive = 0

  incrementActive(){
    this.activeToInactive ++;
  }

  incrementInactive(){
    this.inactiveToActive ++;
  }
}
