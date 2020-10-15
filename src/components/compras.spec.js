/* global describe, it, expect */

import { createLocalVue, shallowMount } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Compras from "@/components/Compras";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

// console.log({ Compras });

describe("Compras", () => {
  const wrapper = shallowMount(Compras, { localVue });
  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain("Listado");
  });
});
