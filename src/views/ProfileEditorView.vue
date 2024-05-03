<template>
  <div>
    <div>
      <div class="row mt-5">
        <div class="col"></div>
        <div class="col">
          <div
            class="card custom-card shadow bg-dark"
            style="border-radius: 25px"
          >
            <h5 class="card-header" style="color: #eeeeee">Profile</h5>
            <div class="card-body mx-5">
              <div class="row d-flex align-items-center">
                <div class="col">
                  <div>
                    <img
                      :src="imgUrl || 'https://placehold.co/200'"
                      class="rounded-circle mb-3"
                      alt="https://placehold.co/200"
                    />
                  </div>
                  <a
                    href="#"
                    class="btn custom-btn-2 btn btn-outline-danger btn-lg mb-3 form-button"
                    @click="this.show = true"
                    >Change Image</a
                  >
                  <div class="form-floating mb-3 reg-form">
                    <input
                      type="text"
                      class="form-control reg-form bg-dark"
                      placeholder="Display Name"
                      v-model="displayName"
                    />
                    <label>Display Name</label>
                  </div>

                  <a
                    href="#"
                    class="btn custom-btn-2 btn btn-outline-danger btn-lg mt-3 mb-3 form-button"
                    @click="changeProfile()"
                    >Change</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
    <div>
      <my-upload
        @crop-success="cropSuccess"
        field="img"
        v-model="show"
        :width="200"
        :height="200"
        img-format="png"
        langType="en"
        :noCircle="true"
      ></my-upload>
    </div>
  </div>
</template>

<script>
import { getAuth, updateProfile } from "firebase/auth";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase";
import myUpload from "vue-image-crop-upload";
export default {
  components: {
    "my-upload": myUpload,
  },
  async created() {
    this.getProfile();
  },
  methods: {
    async cropSuccess(imgDataUrl) {
      this.imgUrl = imgDataUrl;
      await this.uploadImage();
      this.imgUrl = await this.getImageUrl();
    },

    async getImageUrl() {
      const storageRef = ref(storage, "profileImage/" + this.uid);
      return await getDownloadURL(storageRef);
    },
    async uploadImage() {
      const storageRef = ref(storage, "profileImage/" + this.uid);
      try {
        await uploadString(storageRef, this.imgUrl, "data_url");
        console.log("uspjeh");
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    async changeProfile() {
      const auth = getAuth();
      if (!this.displayName || !this.imgUrl) {
        alert("ispuni sve pa nastavi");
        return;
      }
      try {
        await updateProfile(auth.currentUser, {
          displayName: this.displayName,
          photoURL: this.imgUrl,
        });
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
    getProfile() {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;

        const photoURL = user.photoURL;
        const email = user.email;

        this.uid = user.uid;
        if (displayName == null) this.displayName = email;
        else this.displayName = displayName;

        this.imgUrl = photoURL;
      }
      console.log(user);
    },
  },
  data() {
    return {
      displayName: "",
      imgUrl: "",
      show: false,
      uid: "",
    };
  },
};
</script>

<style scoped>
.reg-form {
  border-color: #eeeeee;
  color: #eeeeee;
}
.form-button:not(:hover) {
  border-color: #eeeeee;
  color: #eeeeee;
}
.form-button:hover {
  background-color: #eeeeee;
  color: #222831;
  border-color: #eeeeee;
}
</style>
