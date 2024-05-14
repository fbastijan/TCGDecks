let search = ref("");

const komentari = [];

import { ref } from "vue";
const UserData = {
  currentUser: ref("test@test.hr"),
  currentUserId: ref(""),
  currentUserDisplayName: ref(""),
  currentUserimgUrl: ref(""),
};
export { komentari, UserData, search };
