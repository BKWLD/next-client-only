"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientOnly = void 0;
var react_1 = __importDefault(require("react"));
var dynamic_1 = __importDefault(require("next/dynamic"));
var Component = function (_a) {
    var children = _a.children;
    return <>{children}</>;
};
var ClientOnly = (0, dynamic_1.default)(function () { return Promise.resolve(Component); }, {
    ssr: false,
});
exports.ClientOnly = ClientOnly;
