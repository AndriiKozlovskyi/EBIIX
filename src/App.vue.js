import BodyView from './components/body/BodyView.vue';
import HeaderView from './components/headers/HeaderView.vue';
import FooterView from './components/footer/FooterView.vue';
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    // @ts-ignore
    [HeaderView,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(HeaderView, new HeaderView({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    // @ts-ignore
    [BodyView,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(BodyView, new BodyView({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    // @ts-ignore
    [FooterView,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(FooterView, new FooterView({}));
    const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
    const __VLS_15 = __VLS_resolvedLocalAndGlobalComponents.Toast;
    /** @type { [typeof __VLS_components.Toast, ] } */
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({}));
    const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
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
            BodyView: BodyView,
            HeaderView: HeaderView,
            FooterView: FooterView,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=App.vue.js.map