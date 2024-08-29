'use client';

import MarkdownPreview from '@/components/markdown-preview';
import PageWrapper from '@/components/page-wrapper';

const mdData = `# **Privacy Agreement**

This is the Privacy Policy of Nstbrowser (“Nstbrowser.io”). This policy applies to all Nstbrowser software applications, websites, and related services.

As a general rule, users of our software applications and services are anonymous to us, and we have no feasible ways to identify you. However certain categories of data may be collected while using our applications and services, and some of this information may be considered “personal data” by the law. When we collect personal data, we generally act as a “data controller” as defined in applicable law. The exact categories of data we collect, why we collect it, and your opt-out choices depend on the application or service you use, as is more fully described below.

When we post changes to this Privacy Policy, we will include the date when this Policy was last updated.

### How Nstbrowser Collects Information

Nstbrowser may use the following different methods to receive and collect your information:

1. Account registration. When registering a Nstbrowser account, the system will ask you to provide information so that we can record you as the owner of the Nstbrowser product, which will help us provide you with services and information.
2. Product use, when you visit our website or log in to the Nstbrowser client, we will need enough information to complete your operation, and our server will automatically collect and aggregate information about your visit. The collected information may include the information of the login person's Nstbrowser account, access IP, operating system, browser type, etc.
3. Customer support, you can call or contact us through E-mail and other communication channels to request technical assistance on products or information about our products, personal or account information that may be provided to us.

### Purpose of Information Collected by Nstbrowser

Personal Information is information that you can be identified from and does not include any anonymized forms of information. Personal information is the kind that you voluntarily provide to us or that is collected automatically.

1. We primarily use your Personal Information to help us provide a better experience for you on our Website and to provide you with the Services and/or information you may have requested, such as using some features of our Website.
2. Personal Information that could be considered identifying a user may be used for the following:
- Administering your account;
- Contacting you to communicate about your user account with us or regarding any question you make through the Service;
- Improving your personal user experience;
- Identifying you when you sign in to your account;
- Fulfilling your subscriptions;
- Providing you with the services;
- Providing customer support;
- Advising you about updates to the Website, Software Application, or related items;
- Send you marketing communications and advertising we think you may find useful, but only in accordance with your preferences;
- Analyzing the use of the Website, Service, and the people visiting to improve our content;
- To check and compare a user against any imposed international, European Union, or national sanctions;
- Other purposes that we disclose to you when we request your information.

### **Types of Personal Information**

We may process some types of Personal Information in relation to you that is collected directly in the following circumstances:

- Creating a user profile (information such as your full name, e-mail and postal addresses, telephone number, and country of residence);
- Your login and password details, in connection with the account sign-in process;
- Subscribing to our Service, and newsletters, uploading or submitting any material through Nstbrowser, or requesting any information;
- Contact us using the chat service or other channels;
- E-mails or communications that you send to us (when you ask for support, report a problem, send us questions, comments, contributions to discussions, messages to other users);
- Details of any requests or transactions you make through the Service and/or our Software Application;
- Information about your activity on and interaction with our Website, such as your IP address and the type of device or browser you use;
- Contact details such as billing information for subscriptions;
- Payment method of choice for services rendered, including payment amounts, time, and secure bank details such as credit card details (in order to subscribe to our Services on the Website, you will be asked to provide certain credit information, and possibly additional specific information so that you may be properly charged for the services rendered to you. This payment and billing information may be stored for the following period: 7 years. If so, it will be used exclusively to assist you with making future purchases with us and to uphold bookkeeping requirements).

In short, this information helps us to improve our products and services. We have no practical way to use this information to identify you personally. We may store this usage data for up to many years.

### Logs

If you visit our websites, we may collect your IP address to help diagnose problems with our servers and administer our websites. We use IP addresses solely for this purpose and may keep website access logs for up to six months.

### Use of Cookies

We use cookies on our websites for session management and retaining your settings or preferences. We may also use third-party cookies to collect visitor statistics and measure our marketing campaigns. If you would like to reject third-party cookies, please configure your browser’s settings accordingly

### Children’s Privacy

There are no guarantees that children cannot enter our websites or use our applications without parental consent or notification. Therefore, and as provided in our End User License Agreements, we require children to include their parents in the download process, and we encourage parents to read this Privacy Policy before allowing their children to use our applications and services.

### International Transfers

When you are located in the European Economic Area (“EEA”), personal information collected about you will be transferred to recipients in countries located outside the EEA or can be remotely accessed in countries located outside the EEA, including in countries that may not be decided by the European Commission that it provides an adequate level of protection to personal information. We have followed requirements as set out in applicable law to provide adequate protection for your personal data. To the extent as required by applicable law, our Business Partner will obtain your valid consent to the extent for us to transfer your personal information to recipients including Nstbrowser’s affiliates and any other recipients as described in this Privacy Policy, which is located outside the EEA. You are entitled to withdraw your consent at any time.

### Security of Personal Information

The security of users’ information is our utmost priority, and we take strict measures in order to protect our data from unauthorized access, use, disclosure, or destruction of data. We have implemented physical, technical, and administrative security measures for the Services that comply with applicable laws and industry standards. For example, we use firewalls, encryption technology, and other automated software designed to protect against fraud and identity theft; our data is only stored in centers that provide high-level security for User’s information. Physical access is strictly controlled both at the perimeter and at building ingress points by our staff utilizing video surveillance and other electronic means.

We also protect User’s privacy by seeking to minimize the amount of sensitive data that we store on our servers in the first place. We also seek appropriate contractual protection from our partners regarding their treatment of user data.

### Contacts

If you have any questions about this statement or any privacy issues in our applications or services, feel free to contact us by sending mail to support@nstbrowser.io.`;
export default function PagePolicyPrivacy() {
  return (
    <PageWrapper innerClassName="container mx-auto" bottomLine>
      <MarkdownPreview
        className="policy my-editor-preview"
        previewTheme="github"
        editorId="policyView"
        modelValue={mdData}
      />
    </PageWrapper>
  );
}
