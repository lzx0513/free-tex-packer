import Grid from './Grid';
import JsonHash from './JsonHash';
import JsonArray from './JsonArray';
import XML from './XML';
import UIKit from './UIKit';
import Spine from './Spine';
import PLIST from './PLIST';
import PLIST2 from './PLIST2';

const list = [
    Grid,
    JsonHash,
    JsonArray,
    XML,
    UIKit,
    Spine,
    PLIST,
    PLIST2
];

function getSplitterByType(type) {
    for(let item of list) {
        if(item.type === type) {
            return item;
        }
    }
    return null;
}

function getSplitterByData(data, cb) {
    for(let item of list) {
        if(item.type !== Grid.type) {
            item.check(data, (checked) => {
                if(checked) {
                    if(cb) {
                        cb(item);
                        cb = null;
                    }
                }
            });
        }
    }
    
    return getDefaultSplitter();
}

function getDefaultSplitter() {
    return Grid;
}

export { getSplitterByType, getSplitterByData, getDefaultSplitter };
export default list;