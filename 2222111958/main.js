import Box from './script/Box.js';
import Mottos from "./script/Mottos.js";
import Timer from "./script/Timer.js";
import Images from "./script/Images.js";
import Title from "./script/Title.js";
import Clock from "./script/Clock.js";
import { $ } from "./utils.js";
const box = new Box($('#outer'), $('#maskStyle'));
const title = new Title($('#title'));
const timer = new Timer($('#timer'));
const mottos = new Mottos($('#motto'));
const images = new Images($('#bg'));
const clock = new Clock($('#clockOuter'));
window.wallpaperPropertyListener = {
    userDirectoryFilesAddedOrChanged: function (propertyName, changedFiles) {
        // propertyName is the name of the property that triggered the event.
        // changedFiles contains all added (or modified) file paths
        images.setCustomImages(propertyName, changedFiles);
    },
    userDirectoryFilesRemoved: function (propertyName, removedFiles) {
        // propertyName is the name of the property that triggered the event.
        // removedFiles contains all removed file paths
        images.setCustomImages(propertyName, []);
    },
    applyUserProperties: function (properties) {
        if (properties.title) {
            if (properties.title.value) {
                title.setText(properties.title.value);
            }
        }
        if (properties.deadline) {
            if (properties.deadline.value) {
                timer.setDeadline(properties.deadline.value);
            }
        }
        if (properties.precision) {
            timer.setPrecision(properties.precision.value);
        }
        if (properties.imageSwitchFrequency) {
            images.setImageSwitchFrequency(properties.imageSwitchFrequency.value);
        }
        if (properties.imageSwitchOrder) {
            images.setImageSwitchOrder(properties.imageSwitchOrder.value);
        }
        if (properties.customMottoEnable) {
            mottos.setCustomMottoEnable(properties.customMottoEnable.value);
        }
        if (properties.usingDefaultMottos) {
            mottos.setUsingDefaultMottos(properties.usingDefaultMottos.value);
        }
        if (properties.customMottos) {
            mottos.setCustomMottos(properties.customMottos.value);
        }
        if (properties.mottoSwitchFrequency) {
            mottos.setMottoSwitchFrequency(properties.mottoSwitchFrequency.value);
        }
        if (properties.mottoSwitchOrder) {
            mottos.setMottoSwitchOrder(properties.mottoSwitchOrder.value);
        }
        if (properties.showClock) {
            clock.setClockVisible(properties.showClock.value);
        }
        if (properties.showNumClock) {
            clock.setNumVisible(properties.showNumClock.value);
        }
        if (properties.translateY) {
            box.setTranslateY(properties.translateY.value);
        }
        if (properties.maskTransparency) {
            box.setMaskTransparency(properties.maskTransparency.value);
        }
        if (properties.scaleRate) {
            box.setScale(properties.scaleRate.value);
        }
        if (properties.sunriseTime) {
            images.setModeSwitchTime(0, properties.sunriseTime.value);
        }
        if (properties.sunsetTime) {
            images.setModeSwitchTime(1, properties.sunsetTime.value);
        }
        if (properties.modeEnable) {
            images.setModeEnable(properties.modeEnable.value);
        }
        // refresh()
    },
};
