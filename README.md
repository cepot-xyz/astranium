# Astranium

An interactive project exploring the life cycle of the universe through real-time 3D experiences built with Unity.

What began as a campus assignment -- a solar system in Augmented Reality -- grew into a full cosmic narrative: the Five Ages of the Universe.

## The Five Ages

### I - Primordial Era
The beginning of everything. A single point expands at incomprehensible speed. Quarks, leptons, and the first forces crystallise from the chaos. At the centre of this primordial storm, a giant cat sleeps peacefully -- Ocha, the guardian of creation.
- **Status:** Playable
- **Key features:** BigBang video, Skybox, ClockRings (Seconds/Minutes/Hours), PostProcessVolume, AudioManager, OchaTapiKucingPrimordial (3D cat model)

### II - Stelliferous Era
The age we call home. Stars ignite across the cosmos, galaxies spiral into being, and planets form in the warmth of stellar nurseries. Explore a fully navigable solar system with WASD movement and mouse look.
- **Status:** Playable
- **Key features:** WASD + Mouse Look, 11 planets, orbit mechanics, FollowPlanetDesktop, MainMenuDesktop navigation

### III - Degenerate Era
The stars are dying. White dwarfs cool into crystal spheres, neutron stars pulse their last rhythms, and supernovae scar the sky. Fifteen stellar explosions, each on a randomised playback timer, fill the void with fading light.
- **Status:** Playable
- **Key features:** 15 StarExplosion, PlaytimeRandomizer, Degenerate skybox, additive blend video, build verified

### IV - Black Hole Era
The last gravitational titans roam an empty universe. Black holes consume the final remnants of matter and slowly evaporate through Hawking radiation. A gravitational lensing shader is planned to visualise the warping of spacetime.
- **Status:** In Development
- **Planned:** Gravitational lensing shader, event horizon VFX, Hawking radiation particles

### V - Dark Era
The universe reaches its final state. Protons have decayed, black holes have evaporated, and only the faintest particles -- photons, leptons, and positrons -- drift through an endless, silent void. Thermodynamic equilibrium. Absolute stillness.
- **Status:** In Development
- **Planned:** Proton decay VFX, void atmosphere, final scene closure

## Platform Branches

### AR Version (legacy)
4 scenes: `MainMenu` -> `ScanningMarker` -> `Angkasa` (AR) -> `LibraryPlanet` (non-AR). Marker-based solar system with 11 planets and 13 constellations. Fully intact and build-ready.

### Desktop Version (active development)
8 scenes: `MainMenuDesktop`, `AngkasaDesktop`, `LibraryPlanetDesktop`, and the Five Ages series. WASD + Mouse Look, orbit mechanics, and custom VFX.

## Tech Stack

| Item | Version |
|---|---|
| Unity | 6000.3.10f1 |
| Render Pipeline | URP |
| AR Framework | AR Foundation 6.3.4 |
| Target Platforms | Windows Standalone & Android |
| Scripting Backend | IL2CPP |
| Total C# Scripts | 21 |

## Development Team -- Team 7

- **Affandi Rahman Hakim** -- Lead developer, integration, scripting, scene composition, AR implementation, desktop port, team coordination
- **Dewi Yuni Hapsari** -- Astronomical data research (real scale, size, and orbital data for Angkasa scenes)
- **Jalu Raya Baihaqy** -- Data transformation and planet composition (simplifying real data for Unity, planet arrangement, orbit animations, LibraryPlanet index)
- **Aqib Nu'man Attamami** -- Constellation research and composition (Ophiuchus data, constellation placement, LibraryPlanet index)

**AI Assistant:** Ocha (OpenCode) -- scripting, YAML analysis, Unity log debugging, documentation, narrative co-creation.

## Visual Assets

- **Skybox:** Milky Way panorama + custom AI-generated equirectangular 2:1 skyboxes per era
- **Video:** Bigbangsource.mp4 (Primordial), Starexplosions.mp4 (Degenerate) -- additive screen blend
- **Shader:** ScreenVideo.shader -- custom additive blend
- **Textures:** 11 planet color maps + normal maps, white dwarf, sprite UI, zodiac overlays
- **3D Models:** Tripo AI (OchaTapiKucingPrimordial), Meshy AI

## Music

Melodysheep, CutGlitch, and HoYo-MiX.

## Technical Notes

### Scene Corruption Incident
A YAML corruption occurred on AngkasaDesktop when the scene file was edited externally via PowerShell while Unity was running. Recovery was performed from a backup. Since then, all scene editing is done exclusively through the Unity Editor.

### Build Performance
With a single scene in build settings, build time ranges from 9 to 35 seconds depending on cache. Build output is placed in the `Pre-Build/` directory.

## Downloads

- **Windows Desktop:** Portable .exe -- extract and run, no installation required. 64-bit.
- **Android AR:** APK -- requires Android 10 or later, ARCore support.

## Roadmap

- Complete Black Hole Era (gravitational lensing shader)
- Complete Dark Era (proton decay VFX, void atmosphere)
- Loading screen with LoadSceneAsync
- Further VFX experiments (particle systems, Shader Graph)

## Folder Structure

```
Assets/
├── Scenes/             # AR + Desktop scenes
│   └── Desktop Scenes/ # 8 desktop scenes
├── Scripts/            # 21 C# scripts
├── Materials/          # Planet & star materials
├── MilkyWay/           # Skybox textures & materials
├── Textures/           # Planet textures, normal maps, PBR
├── PNG/                # UI, overlay, background, button
├── Video/              # Video clips (MP4)
├── Shaders/            # Custom shaders
├── Models/             # 3D models & prefabs
├── Audio/              # 5 BGM tracks (OGG)
├── Animation/          # Animation clips & controllers
└── Settings/           # Post-processing profile
Notes/                  # Project documentation
Web/                    # Official website (HTML/CSS/JS)
```

---

_For detailed documentation, see files in the `Notes/` folder._
