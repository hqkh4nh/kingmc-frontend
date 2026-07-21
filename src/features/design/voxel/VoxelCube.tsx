import { BLOCKS, type BlockName } from './voxelBlocks'

interface Props {
  /** Cube edge length in px. */
  size: number
  /** Which Minecraft-style block texture set to use. */
  block: BlockName
  className?: string
  /** Extra style on the outer float wrapper (e.g. animation-delay). */
  style?: React.CSSProperties
}

type Face = 'front' | 'back' | 'right' | 'left' | 'top' | 'bottom'

const FACES: { key: Face; tex: 'top' | 'side' | 'bottom'; transform: (h: number) => string; brightness: number }[] = [
  { key: 'front', tex: 'side', transform: (h) => `translateZ(${h}px)`, brightness: 1 },
  { key: 'back', tex: 'side', transform: (h) => `rotateY(180deg) translateZ(${h}px)`, brightness: 0.72 },
  { key: 'right', tex: 'side', transform: (h) => `rotateY(90deg) translateZ(${h}px)`, brightness: 0.86 },
  { key: 'left', tex: 'side', transform: (h) => `rotateY(-90deg) translateZ(${h}px)`, brightness: 0.8 },
  { key: 'top', tex: 'top', transform: (h) => `rotateX(90deg) translateZ(${h}px)`, brightness: 1.18 },
  { key: 'bottom', tex: 'bottom', transform: (h) => `rotateX(-90deg) translateZ(${h}px)`, brightness: 0.55 },
]

/**
 * A pure-CSS 3D voxel block wearing recreated Minecraft-style pixel textures on
 * each face. Motion (slow spin + float, plus a place-in pop) lives in voxel.css
 * and stops under reduced-motion.
 */
export default function VoxelCube({ size, block, className = '', style }: Props) {
  const half = size / 2
  const tex = BLOCKS[block]
  return (
    <div className={`voxel-float ${className}`} style={style}>
      <div className="voxel-pop">
        <div className="voxel-cube" style={{ width: size, height: size }}>
          {FACES.map((f) => (
          <div
            key={f.key}
            className="voxel-face"
            style={{
              width: size,
              height: size,
              backgroundImage: tex[f.tex],
              backgroundSize: '100% 100%',
              imageRendering: 'pixelated',
              filter: `brightness(${f.brightness})`,
              transform: f.transform(half),
            }}
          />
          ))}
        </div>
      </div>
    </div>
  )
}
