export default function K3Logo({ size = 40 }) {
    return (
        <div
            style={{
                width: size,
                height: size,
                borderRadius: "14px",
                background: "radial-gradient(circle at 25% 0, #f3c969 0, #0c7c52 45%, #020807 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: size * 0.45,
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.5px",
                boxShadow: "0 3px 10px rgba(0,0,0,0.15)"
            }}
        >
            K3
        </div>
    );
}
