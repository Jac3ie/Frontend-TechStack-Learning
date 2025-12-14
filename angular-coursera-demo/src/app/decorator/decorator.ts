import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Decorator Demo Component (standalone)
 *
 * What is a "decorator" in Angular/TypeScript?
 * - A decorator is a special annotation (starts with @) that "adds metadata"
 *   or behavior to a class / property / method / parameter.
 *
 * In this file we show 3 very common Angular decorators:
 * 1) @Component  (class decorator)  -> tells Angular "this class is a UI component"
 * 2) @Input      (property decorator)-> allow parent to pass data into this component
 * 3) @Output     (property decorator)-> allow this component to send events to parent
 *
 * Important:
 * - This component is "isolated" by routing.
 * - app.html is shared globally, so parent->child examples should be done
 *   inside THIS component's template (decorator.html), not in app.html.
 */

@Component({
  selector: 'app-decorator',
  standalone: true,
  // imports is empty because we are only using basic HTML here.
  // (If later you use Angular directives/pipes, you may add them here.)
  imports: [],
  templateUrl: './decorator.html',
  styleUrl: './decorator.css',
})
export class Decorator {
  // ----------------------------
  // @Input: data comes FROM parent (who uses <app-decorator ...>)
  // In our case, the "parent" is not app.html. We will create a local parent
  // area inside decorator.html that renders a child component example.
  // For now we keep @Input to demonstrate the syntax and concept.
  // ----------------------------
  
  // {{ title }} 匹配的是 组件类里的同名属性；@Input() 只是让这个属性可以从父组件被绑定/覆盖，不影响模板读取它的方式。
  @Input() title = 'Decorator Demo (Input default title)';

  // ----------------------------
  // @Output: event goes TO parent
  // Parent can listen like: (liked)="onLiked($event)"
  // We'll demonstrate the event in decorator.html.
  // ----------------------------
  @Output() liked = new EventEmitter<string>();

  // internal state (normal class field, not a decorator)
  likesCount = 0;

  onLikeClick() {
    this.likesCount++;

    // emit an event message to parent (if any parent is listening)
    this.liked.emit(`Child says: Thanks! Total likes = ${this.likesCount}`);
  }
}

/**
 * NOTE:
 * In a real app, @Input/@Output shine when one component is nested inside another.
 * Since app.html is shared and should stay clean, we will simulate parent->child
 * INSIDE decorator.html by creating a small "parent area" there.
 */