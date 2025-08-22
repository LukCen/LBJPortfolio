<script setup lang="ts">
const mail_key = import.meta.env.VITE_MAILJS_PUBLIC_KEY
const service = import.meta.env.VITE_MAILJS_SERVICE_ID
const template = import.meta.env.VITE_MAILJS_TEMPLATE_ID
import emailjs from "@emailjs/browser"
import { Loader2 } from "lucide-vue-next";
import { ref } from "vue";

const isSending = ref(false) // track if the email is in process of being sent
const isSuccessful = ref(false) // track if email was sent successfully
const title = ref('')
const email = ref('')
const content = ref('')

async function sendEmail() {
  try {
    isSending.value = true
    const result = await emailjs.send(
      service, template,
      {
        name: email.value,
        title: title.value,
        email: email.value,
        message: content.value
      },
      mail_key
    )

    isSending.value = false
    isSuccessful.value = true
    console.log('Mail sent successfully ' + result.text)
  } catch (e) {
    console.error(e)
  }
}
</script>

<template>
  <section id="contact" class="flex flex-col gap-5 bg-medium p-4 w-full rounded-xl">
    <h2 class="text-secondary font-bold text-shadow-[0px_0px_20px_var(--color-secondary)]">Contact</h2>
    <form @submit.prevent="sendEmail" class="flex flex-col gap-5">
      <!-- client email -->
      <div class="form-block flex gap-5 border-1 bg-dark px-4 py-4 border-primary rounded-md">
        <label class="min-w-[100px] text-center flex justify-center items-center font-semibold" for="contact-email">Your
          e-mail</label>
        <input required v-model="email" class="w-full p-2 min-h-[40px] rounded-lg bg-medium" id="contact-email"
          type="email">
      </div>
      <!-- title -->
      <div class="form-block flex gap-5 border-1 bg-dark px-4 py-4 border-primary rounded-md">
        <label class="min-w-[100px] text-center flex justify-center items-center font-semibold"
          for="contact-title">E-mail title</label>
        <input required v-model="title" class="w-full p-2 min-h-[40px] rounded-lg bg-medium" id="contact-title"
          type="text">
      </div>
      <!-- message -->
      <div class="form-block flex flex-col gap-5 border-1 border-primary rounded-md bg-dark px-4 py-6">
        <label for="contact-contents" class="font-semibold">Message</label>
        <textarea required v-model="content" id="contact-contents" class="w-full p-4 min-h-[40px] rounded-xl bg-medium"
          rows="20"></textarea>
      </div>
      <!-- submit -->
      <button type="submit"
        class="flex gap-5 px-10 py-2 w-fit bg-primary tracking-wider font-bold text-dark cursor-pointer hover:shadow-primary duration-125 rounded-lg">
        <Loader2 v-if="isSending" class="animate-spin" color="var(--color-dark)" />
        <span>Send</span>
      </button>
      <span v-if="isSuccessful" class="font-semibold text-secondary">Your email was sent successfully. Thank you for
        reaching out!</span>
    </form>
  </section>
</template>
