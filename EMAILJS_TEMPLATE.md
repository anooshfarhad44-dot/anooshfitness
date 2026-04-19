# EmailJS Template for Personal Training Form

Use this HTML content in your EmailJS template body. It maps directly to the contact form fields from `app/sections/PersonalTrainingForm.tsx`.

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 14px; color: #2c3e50;">
  <div style="margin-bottom: 16px;">
    <strong>New personal training request received.</strong>
  </div>

  <div style="margin-bottom: 24px; padding: 18px; border: 1px solid #d1d5db; border-radius: 12px; background: #f9fafb;">
    <div style="margin-bottom: 8px; font-size: 15px; color: #0f172a;">From: <strong>{{from_name}}</strong></div>
    <div style="margin-bottom: 8px; color: #475569;">Email: {{reply_to}}</div>
    <div style="margin-bottom: 8px; color: #475569;">Phone: {{phone}}</div>
    <div style="margin-bottom: 8px; color: #475569;">Age: {{age}}</div>
    <div style="margin-bottom: 8px; color: #475569;">Gender: {{gender}}</div>
    <div style="margin-bottom: 8px; color: #475569;">Height: {{height}}</div>
    <div style="margin-bottom: 8px; color: #475569;">Goal type: {{goal_type}}</div>
    <div style="margin-bottom: 8px; color: #475569;">Current weight: {{current_weight}}</div>
    <div style="margin-bottom: 8px; color: #475569;">Goal weight: {{goal_weight}}</div>
    <div style="margin-bottom: 8px; color: #475569;">Fitness level: {{fitness_level}}</div>
  </div>

  <div style="margin-bottom: 16px; font-size: 15px; color: #0f172a;">
    <strong>Message / goal details</strong>
  </div>
  <div style="padding: 16px; border: 1px solid #d1d5db; border-radius: 12px; background: #ffffff; color: #334155; line-height: 1.6;">
    {{message}}
  </div>

  <div style="margin-top: 24px; font-size: 12px; color: #64748b;">
    Please respond at your earliest convenience.
  </div>
</div>
```

## Template variables
- `{{from_name}}`
- `{{reply_to}}`
- `{{phone}}`
- `{{age}}`
- `{{gender}}`
- `{{height}}`
- `{{goal_type}}`
- `{{current_weight}}`
- `{{goal_weight}}`
- `{{fitness_level}}`
- `{{message}}`
- `{{subject}}` (hidden field added to the form)

## Notes
- In EmailJS, set the template subject to something like: `New Personal Training Request from {{from_name}}`
- If needed, add `Reply-To` using `{{reply_to}}` in the email service settings.
