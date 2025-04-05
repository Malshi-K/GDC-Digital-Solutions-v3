'use client';

export default function TrackedPhoneLink({ 
  phoneNumber = "0212463988", 
  children, 
  className = "",
  ...props 
}) {
  const handlePhoneClick = (e) => {
    e.preventDefault();
    const phoneUrl = `tel:${phoneNumber}`;
    
    // Try the gtag_report_conversion function first
    if (typeof window !== 'undefined' && window.gtag_report_conversion) {
      try {
        window.gtag_report_conversion(phoneUrl);
        console.log('[Phone Tracking] Using gtag_report_conversion');
      } catch (error) {
        console.error('[Phone Tracking] Error tracking phone call:', error);
        window.location.href = phoneUrl;
      }
    } 
    // Fallback to trackPhoneCallConversion if available
    else if (typeof window !== 'undefined' && window.trackPhoneCallConversion) {
      try {
        window.trackPhoneCallConversion();
        console.log('[Phone Tracking] Using trackPhoneCallConversion');
        setTimeout(() => {
          window.location.href = phoneUrl;
        }, 300);
      } catch (error) {
        console.error('[Phone Tracking] Error tracking phone call:', error);
        window.location.href = phoneUrl;
      }
    } 
    // Last resort - just navigate
    else {
      console.warn('[Phone Tracking] No tracking function available');
      window.location.href = phoneUrl;
    }
  };

  return (
    <a
      href={`tel:${phoneNumber}`}
      onClick={handlePhoneClick}
      className={className}
      {...props}
    >
      {children || phoneNumber}
    </a>
  );
}