# Tax Clarity Companion

Independent, static hackathon prototype for first-time and self-filing Indian taxpayers. It explains Form 26AS, AIS, TIS and pre-filled ITR data, then guides a demo mismatch, AIS feedback status and OTP recovery journey.

## Run locally

From this folder, serve over HTTP (ES modules and component fetch require HTTP):

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080/`. Use hash routes such as `#/tax-info` and `#/otp-recovery`.

## Safety

All records and OTPs are synthetic. No data is submitted and this is not an official government product.
