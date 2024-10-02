import { name, phoneNumber, address } from "../../vars";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("z-1000 flex flex-col justify-center items-center bg-black w-full px-4 py-8 text-white shadow-md space-y-4 md:space-y-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-center space-x-3 w-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fas fa-map-marker-alt") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-base md:text-lg") }, });
    (__VLS_ctx.address);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-center space-x-3 w-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("pi pi-phone text-lg md:text-xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-base md:text-lg") }, });
    (__VLS_ctx.phoneNumber);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-center space-x-3 w-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-base md:text-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr, __VLS_intrinsicElements.hr)({ ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col items-center w-full p-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-xl font-bold") }, });
    (__VLS_ctx.name);
    __VLS_styleScopedClasses['z-1000'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['bg-black'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-8'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['shadow-md'];
    __VLS_styleScopedClasses['space-y-4'];
    __VLS_styleScopedClasses['md:space-y-0'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['space-x-3'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['fas'];
    __VLS_styleScopedClasses['fa-map-marker-alt'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['md:text-lg'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['space-x-3'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['pi'];
    __VLS_styleScopedClasses['pi-phone'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['md:text-xl'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['md:text-lg'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['space-x-3'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['md:text-lg'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-bold'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            name: name,
            phoneNumber: phoneNumber,
            address: address,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=FooterView.vue.js.map