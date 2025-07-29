export type Language = "en" | "zh"

export const translations = {
  en: {
    // Header
    language: "中文",

    // Home Page
    welcome: "Welcome",
    welcomeUser: "Welcome {{name}}",
    profile: "Profile",
    signupLogin: "Sign up / Login",

    // Bottom Action
    payDepositUnlock: "Pay $200 Deposit to Unlock",
    registerLoginUnlock: "Register or Login to Unlock Door",
    securityDepositRequired: "Security deposit required. Final amount calculated based on items taken.",
    signupLoginStart: "Sign up or login to start your smart shopping experience.",
    payUnlock: "Pay $200 & Unlock",

    // Auth Modal
    membership: "Membership",
    signupLoginPurchase: "Sign up / Login for purchase",
    phoneNumber: "Phone number",
    next: "Next",
    or: "or",
    continuePasskey: "Continue with Passkey",
    verificationCode: "Verification Code",
    verificationSent: "We've just sent a 6-digit verification code to",
    resendCode: "Resend code in 00:15",
    verify: "Verify",

    // Payment Modal
    choosePaymentMethod: "Please choose a payment method",
    depositHold: "$200 deposit will be on hold, actual value will be calculate after product taken out from fridge.",
    cancel: "Cancel",
    todoPaymentGateway: "TODO: Payment Gateway",
    paymentIntegrationSoon: "Payment integration coming soon...",
    processingPayment: "Processing Payment...",
    processingDeposit: "Please wait while we process your ${{amount}} deposit.",

    // Detection Modal
    doorUnlocked: "Door Unlocked",
    takeItems: "Take the items you want.\nOur smart sensors will detect what you take.",
    itemsDetected: "Items Detected!",
    detectedItems: "We detected the following items:",
    total: "Total",
    autoClosing: "Auto-closing door in {{seconds}} seconds",
    closeDoorNow: "Close Door Now",
    confirmPurchase: "Confirm Your Purchase",
    confirmDetected: "Please confirm the detected items are correct:",
    confirmPay: "Confirm & Pay",

    // Unlock Modal
    unlockingDoor: "Unlocking Door...",
    smartSensors: "Smart sensors are activating.\nDoor will unlock shortly.",
    processingPaymentCalc: "Processing Payment...",
    calculatingTotal: "Calculating total for detected items.\nProcessing your payment.",
    paymentComplete: "Payment Complete",
    thankYou: "Thank you for your purchase!",
    contactSupport: "Contact Customer Service 2888 8888",

    // Checkout Modal
    checkoutComplete: "Checkout Complete",
    thankYouServices: "Thank you for using our services.",
    itemsPurchased: "Items Purchased:",
    securityDeposit: "Security Deposit:",
    itemsTotal: "Items Total:",
    refundAmount: "Refund Amount:",
    additionalCharge: "Additional Charge:",
    orderNo: "Order no. #{{orderNumber}}",
    refundProcessed: "Refund will be processed to your original payment method within 3-5 business days.",
    additionalCharged: "Additional amount has been charged to your payment method.",
    done: "Done",

    // Profile Page
    myProfile: "My Profile",
    updateProfile: "Update Profile",
    viewMyOrders: "View My Orders",
    faq: "FAQ",
    contactSupports: "Contact Supports",
    logout: "Logout",
    termsConditions: "Terms and Conditions",
    privacyPolicy: "Privacy Policy",

    // Info Banner
    smartVendingExperience: "Smart Vending Experience",
    smartVendingDesc:
      "Browse our products below. A $200 security deposit is required to unlock the door. Take what you want - our smart sensors will detect items and calculate the final amount. Any remaining deposit will be refunded.",

    // QR Scan
    scanQrTitle: "Scan a Smart Fridge QR to get started",
    scanQrDescription: "Tap the QR code icon to scan and identify which fridge you want to unlock.",
  },
  zh: {
    // Header
    language: "EN",

    // Home Page
    welcome: "歡迎",
    welcomeUser: "歡迎 {{name}}",
    profile: "個人資料",
    signupLogin: "註冊 / 登入",

    // Bottom Action
    payDepositUnlock: "支付 $200 按金解鎖",
    registerLoginUnlock: "註冊或登入以解鎖門",
    securityDepositRequired: "需要保證金。最終金額將根據所取物品計算。",
    signupLoginStart: "註冊或登入開始您的智能購物體驗。",
    payUnlock: "支付 $200 並解鎖",

    // Auth Modal
    membership: "會員",
    signupLoginPurchase: "註冊 / 登入以購買",
    phoneNumber: "電話號碼",
    next: "下一步",
    or: "或",
    continuePasskey: "使用通行密鑰繼續",
    verificationCode: "驗證碼",
    verificationSent: "我們剛剛向以下號碼發送了 6 位數驗證碼",
    resendCode: "重新發送驗證碼 00:15",
    verify: "驗證",

    // Payment Modal
    choosePaymentMethod: "請選擇付款方式",
    depositHold: "$200 按金將被凍結，實際價值將在從冰箱取出產品後計算。",
    cancel: "取消",
    todoPaymentGateway: "待辦：付款閘道",
    paymentIntegrationSoon: "付款整合即將推出...",
    processingPayment: "處理付款中...",
    processingDeposit: "請稍候，我們正在處理您的 ${{amount}} 按金。",

    // Detection Modal
    doorUnlocked: "門已解鎖",
    takeItems: "拿取您想要的物品。\n我們的智能感應器會檢測您拿取的物品。",
    itemsDetected: "檢測到物品！",
    detectedItems: "我們檢測到以下物品：",
    total: "總計",
    autoClosing: "{{seconds}} 秒後自動關門",
    closeDoorNow: "立即關門",
    confirmPurchase: "確認您的購買",
    confirmDetected: "請確認檢測到的物品是否正確：",
    confirmPay: "確認並付款",

    // Unlock Modal
    unlockingDoor: "解鎖門中...",
    smartSensors: "智能感應器正在啟動。\n門將很快解鎖。",
    processingPaymentCalc: "處理付款中...",
    calculatingTotal: "計算檢測物品的總額。\n處理您的付款。",
    paymentComplete: "付款完成",
    thankYou: "感謝您的購買！",
    contactSupport: "聯絡客戶服務 2888 8888",

    // Checkout Modal
    checkoutComplete: "結帳完成",
    thankYouServices: "感謝您使用我們的服務。",
    itemsPurchased: "已購買物品：",
    securityDeposit: "保證金：",
    itemsTotal: "物品總額：",
    refundAmount: "退款金額：",
    additionalCharge: "額外收費：",
    orderNo: "訂單號碼 #{{orderNumber}}",
    refundProcessed: "退款將在 3-5 個工作日內處理到您的原付款方式。",
    additionalCharged: "額外金額已從您的付款方式扣除。",
    done: "完成",

    // Profile Page
    myProfile: "我的個人資料",
    updateProfile: "更新個人資料",
    viewMyOrders: "查看我的訂單",
    faq: "常見問題",
    contactSupports: "聯絡支援",
    logout: "登出",
    termsConditions: "條款及細則",
    privacyPolicy: "私隱政策",

    // Info Banner
    smartVendingExperience: "智能售貨體驗",
    smartVendingDesc:
      "瀏覽下方產品。需要 $200 保證金才能解鎖門。拿取您想要的物品 - 我們的智能感應器會檢測物品並計算最終金額。任何剩餘按金將被退還。",

    // QR Scan
    scanQrTitle: "掃描智能冰箱二維碼開始使用",
    scanQrDescription: "點擊二維碼圖標掃描並識別您想要解鎖的冰箱。",
  },
}

export function t(key: string, language: Language, params?: Record<string, string | number>): string {
  let text = translations[language][key as keyof (typeof translations)[typeof language]] || key

  if (params) {
    Object.entries(params).forEach(([param, value]) => {
      text = text.replace(`{{${param}}}`, String(value))
    })
  }

  return text
}
