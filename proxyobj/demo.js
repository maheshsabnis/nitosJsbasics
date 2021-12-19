let targteObj = {
  message: "I am the Message from Target",
  _secret: "***********",
};

// define the handler
let handler = {
  get(target, prop) {
    if (prop.startsWith("_")) {
      throw new Error("Access is denied for this property");
    } else {
      let value = target[prop];
      return value;
    }
  },
  set(target, prop, value) {
    if (prop.startsWith("_")) {
      throw new Error("Access is denied for this property");
    } else {
      target[prop] = value;
      return true;
    }
  },
};

let proxy = new Proxy(targteObj, handler);

function consumer() {
  try {
    console.log(`Original ${proxy.message}`);
    proxy.message = "NEW VALUE";
    console.log(`Modified ${proxy.message}`);
    console.log(`Access Secret = ${proxy._secret}`);
  } catch (e) {
    console.log(e.message);
  }
}

consumer();
