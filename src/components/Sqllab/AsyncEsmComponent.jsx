import React, { useEffect, useState, forwardRef, } from 'react';
function DefaultPlaceholder({ width, height, showLoadingForImport = false, placeholderStyle: style, }) {
    return (
        // since `width` defaults to 100%, we can display the placeholder once
        // height is specified.
        (height && (
          <div key="async-asm-placeholder" style={{ width, height, ...style }}>
            {showLoadingForImport && <div position="floating" >Loading..</div>}
          </div>
        )) ||
        // `|| null` is for in case of height=0.
        null
      );
}
export default function AsyncEsmComponent(loadComponent, placeholder = DefaultPlaceholder) {
    let promise;
    let component;
    function waitForPromise() {
        if (!promise) {
            promise =
                loadComponent instanceof Promise ? loadComponent : loadComponent();
        }
        if (!component) {
            promise.then(result => {
                component = (result.default ||
                    result);
            });
        }
        return promise;
    }
    const AsyncComponent = forwardRef(function AsyncComponent(props, ref) {
        const [loaded, setLoaded] = useState(component !== undefined);
        useEffect(() => {
            let isMounted = true;
            if (!loaded) {
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
    AsyncComponent.preload = waitForPromise;
    return AsyncComponent;
}