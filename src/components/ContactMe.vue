<script setup lang="ts">
const mail_key = import.meta.env.VITE_MAILJS_PUBLIC_KEY
const service = import.meta.env.VITE_MAILJS_SERVICE_ID
const template = import.meta.env.VITE_MAILJS_TEMPLATE_ID
import emailjs from "@emailjs/browser"
import { Loader2 } from "lucide-vue-next";
import { nextTick, ref, useTemplateRef } from "vue";

const isSending = ref(false) // track if the email is in process of being sent
const isSuccessful = ref(false) // track if email was sent successfully
const title = ref('')
const email = ref('')
const content = ref('')
const mailSuccessful = useTemplateRef<HTMLSpanElement | null>('mailSuccessful')

// controls email sending via EmailJS API
async function sendEmail() {
  try {
    isSending.value = true
    await emailjs.send(
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
    // scrolls down to the 'email sent successfully' after isSuccessful switches value
    nextTick(() => {
      mailSuccessful.value?.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  } catch (e) {
    console.error(e)
  }
}
</script>

<template>
  <section id="contact" class="flex flex-col gap-5 bg-medium p-4 w-full rounded-xl shadow-primary">
    <h2 class="section_header text-secondary font-bold text-shadow-[0px_0px_20px_var(--color-secondary)]">Contact</h2>
    <form @submit.prevent="sendEmail" class="flex flex-col gap-5">
      <!-- client email -->
      <div class="form-block flex gap-5 border-1 border-[rgba(255,255,255,0.4)] bg-dark px-4 py-4 rounded-md">
        <label class="min-w-[100px] text-center flex justify-center items-center font-semibold" for="contact-email">Your
          e-mail</label>
        <input required placeholder="Type in your e-mail here, so I can get back to you!" v-model="email"
          class="w-full p-2 min-h-[40px] rounded-lg bg-medium border-1 border-[rgba(255,255,255,0.2)]"
          id="contact-email" type="email">
      </div>
      <!-- title -->
      <div class="form-block flex gap-5 border-1 border-[rgba(255,255,255,0.4)] bg-dark px-4 py-4 rounded-md">
        <label class="min-w-[100px] flex justify-start items-center font-semibold" for="contact-title">Title</label>
        <input require placeholder="Your email title." v-model="title"
          class="w-full p-2 min-h-[40px] rounded-lg bg-medium border-1 border-[rgba(255,255,255,0.2)]"
          id="contact-title" type="text">
      </div>
      <!-- message -->
      <div class="form-block flex flex-col gap-5 border-1 border-[rgba(255,255,255,0.4)] rounded-md bg-dark px-4 py-6">
        <label for="contact-contents" class="font-semibold">Message</label>
        <textarea required minlength="10"
          placeholder="Type in your message here - minimum of 10 characters is required." v-model="content"
          id="contact-contents"
          class="w-full p-4 min-h-[40px] rounded-xl bg-medium border-1 border-[rgba(255,255,255,0.2)]"
          rows="10"></textarea>
      </div>
      <!-- submit -->
      <button type="submit"
        class="flex gap-5 px-10 py-2 w-fit bg-primary tracking-wider font-bold text-dark cursor-pointer hover:shadow-primary duration-125 rounded-lg">
        <Loader2 v-if="isSending" class="animate-spin" color="var(--color-dark)" />
        <span>Send</span>
      </button>
      <span ref="mailSuccessful" v-show="isSuccessful" :class="{ disabled: isSending === true }"
        class="font-semibold text-secondary" aria-live="polite">Your
        email was sent
        successfully. Thank you for
        reaching out!</span>
    </form>
  </section>
</template>
