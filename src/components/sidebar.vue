<template>
  <div class="sidebar-wrapper">
    <div class="logo-wrapper">
      <img src="../assets/logo.svg" alt="logo" />
      <p class="logo-text">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </p>
    </div>
    <ul class="nav flex-column menu-wrapper">
      <li
        v-for="item in sidebarItems"
        :key="item.path"
        class="nav-item menu-item"
      >
        <router-link
          :to="item.path"
          class="nav-link d-flex align-items-center p-0"
          active-class="active"
        >
          <component :is="getIconComponent(item.name)" class="me-3" />
          <p class="m-0">{{ item.name }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { SidebarItem } from "../types/sidebar";
import HomeIcon from "../icons/home.vue";
import CardIcon from "../icons/card.vue";
import PaymentsIcon from "../icons/payments.vue";
import CreditIcon from "../icons/credit.vue";
import AccountIcon from "../icons/account.vue";

const sidebarItems: SidebarItem[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Cards",
    path: "/cards",
  },
  {
    name: "Payments",
    path: "/payments",
  },
  {
    name: "Credit",
    path: "/credit",
  },
  {
    name: "Settings",
    path: "/settings",
  },
];

const iconMap = {
  Home: HomeIcon,
  Cards: CardIcon,
  Payments: PaymentsIcon,
  Credit: CreditIcon,
  Settings: AccountIcon,
};

const getIconComponent = (name: string) => {
  return iconMap[name as keyof typeof iconMap] || null;
};
</script>
