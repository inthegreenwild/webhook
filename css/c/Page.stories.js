import { within, userEvent } from "@storybook/testing-library";

import MyPage from "./Page";

export default {
  title: "Example/Page",
  component: MyPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = () => ({
  components: { MyPage },
  template: "<my-page />",
});

export const LoggedOut = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
export const LoggedIn = Template.bind({});

// TODO: this doesn't work
// LoggedIn.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const loginButton = canvas.getByLabelText("Log in", {
//     selector: "button",
//   });
//   userEvent.click(loginButton);
// };
