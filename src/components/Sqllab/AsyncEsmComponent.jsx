/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 import React, {
    CSSProperties,
    useEffect,
    useState,
    RefObject,
    forwardRef,
  } from 'react';
  

  
  function DefaultPlaceholder({
    width,
    height,
    showLoadingForImport = false,
    placeholderStyle: style,
  }) {
    return (
      // since `width` defaults to 100%, we can display the placeholder once
      // height is specified.
      (height && (
        <div key="async-asm-placeholder" style={{ width, height, ...style }}>
          {showLoadingForImport && <div>loading</div>}
        </div>
      )) ||
      // `|| null` is for in case of height=0.
      null
    );
  }

   let promise = null;
  let component = null;
  /**
   * Asynchronously import an ES module as a React component, render a placeholder
   * first (if provided) and re-render once import is complete.
   */
  export default function AsyncEsmComponent(
    loadComponent,
    placeholder = DefaultPlaceholder,
  ) {
    
    function waitForPromise() {
      if (!promise) {
        // load component on initialization
        promise =
          loadComponent instanceof Promise ? loadComponent : loadComponent();
      }
      if (!component) {
        promise.then(result => {
          component = result
        });
      }
      return promise;
    }
  
    const AsyncComponent = forwardRef(function AsyncComponent(
      props,
      ref
    ) {
      const [loaded, setLoaded] = useState(component !== undefined);
      useEffect(() => {
        let isMounted = true;
        if (!loaded) {
          // update state to trigger a re-render
          waitForPromise().then(() => {
            if (isMounted) {
              setLoaded(true);
            }
          });
        }
        return () => {
          isMounted = false;
        };
      });
      const Component = component || placeholder;
      return Component ? (
        // placeholder does not get the ref
        <Component ref={Component === component ? ref : null} {...props} />
      ) : null;
    });
    // preload the async component before rendering
    AsyncComponent.preload = waitForPromise;
  
    return AsyncComponent
  }
  