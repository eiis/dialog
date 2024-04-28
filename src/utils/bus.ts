export default class EventEmitter {
  private listeners: { [type: string]: Function[] } = {};

  /**
   * Register event listener
   * @param {string} type - Event type
   * @param {Function} cb - Callback function
   */
  on(type: string, cb: Function) {
    if (!this.listeners[type]) {
      this.listeners[type] = [];
    }

    this.listeners[type].push(cb);
  }

  /**
   * Emit event
   * @param {string} type - Event type
   * @param  {...any} args - Arguments list, pass arguments to callback function
   */
  emit(type: string, ...args: any[]) {
    if (this.listeners[type]) {
      this.listeners[type].forEach((cb) => {
        cb(...args);
      });
    }
  }

  /**
   * Remove a listener for a specific event
   * @param {string} type - Event type
   * @param {Function} cb - Callback function
   */
  off(type: string, cb: Function) {
    if (this.listeners[type]) {
      const targetIndex = this.listeners[type].findIndex((item) => item === cb);
      if (targetIndex !== -1) {
        this.listeners[type].splice(targetIndex, 1);
      }

      if (this.listeners[type].length === 0) {
        delete this.listeners[type];
      }
    }
  }
}
