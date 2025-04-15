import React, { useEffect, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import { cn } from '@/lib/utils';
import useSignature from '@/hooks/useSignature';

const CANVAS_X = 1200; // Internal canvas width
const CANVAS_Y = 320; // Internal canvas height
const MAX_LENGTH = 29;

const Comp = ({ className, onChange }) => {
  const { signature, setSignature } = useSignature();
  const [text, setText] = useState(undefined);
  const [isClicked, setIsClicked] = useState(false);
  const [focused, setFocused] = useState(false);
  const canvasRef = useRef(null);

  /**
   * Draws the text on the canvas and updates global signature state
   * @param {string} text - Signature text to draw
   */
  const drawOnCanvas = (text) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const ratio = window.devicePixelRatio || 2;

    canvas.width = CANVAS_X * ratio;
    canvas.height = CANVAS_Y * ratio;
    ctx.scale(ratio, ratio);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (text) {
      ctx.font = 'italic 100px "Dancing Script"';
      ctx.fillStyle = 'rgba(0,0,0)';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      ctx.fillText(text, CANVAS_X / 2, CANVAS_Y / 2);
    }

    const base64 = canvas.toDataURL();
    setSignature({ text, base64 });
    onChange(base64);
  };

  /**
   * Triggers drawing of the saved signature text
   */
  const sign = () => {
    if (signature.text) {
      drawOnCanvas(signature.text);
      setIsClicked(true);
    }
  };

  /**
   * Clears the global and local signature
   */
  const clear = () => {
    setSignature({ text: '', base64: '' });
  };

  // Re-draw when local text changes
  useEffect(() => {
    if (typeof text !== 'undefined') drawOnCanvas(text);
  }, [text]);

  useEffect(() => {
    // Reset when signature is cleared globally
    if (!signature.text && text) {
      setText('');
    }

    if (signature.text && text === '') {
      setText(undefined);
    }

    if (isClicked) {
      drawOnCanvas(signature.text || '');
    }
  }, [signature]);

  return (
    <div className={cn(className)}>
      {/* Input to type signature text */}
      {(!signature.text || typeof text !== 'undefined') && (
        <input
          type='text'
          value={text}
          onChange={(event) => {
            const value = event.target.value;
            if (value.length > MAX_LENGTH) return;

            setText(value);
          }}
          className='mb-2 mt-4 block w-full max-w-sm rounded bg-white/50 px-4 py-2 outline outline-1 outline-zinc-200 transition-all duration-300 ~text-sm/base focus:outline-zinc-500'
          placeholder='Type your signature here'
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            if (text === '') {
              setText(undefined);
            }
            setFocused(false);
          }}
        />
      )}

      {/* Canvas element to render signature */}
      <div className='relative rounded-xl'>
        <canvas
          ref={canvasRef}
          width={CANVAS_X}
          height={CANVAS_Y}
          className='my-5 w-full rounded-[inherit] border border-dashed border-zinc-500'
        />

        {/* Overlay for 'Click to Sign' */}
        {signature.text && !text && !isClicked && !focused && (
          <button
            type='button'
            onClick={sign}
            className='absolute inset-0 content-center rounded-[inherit] bg-black/20 text-center font-open-sans'
          >
            <p className='font-medium italic ~text-base/3xl'>
              <span className='sm:hidden'>Tap</span>{' '}
              <span className='hidden sm:inline'>Click</span> to sign
            </p>
          </button>
        )}
      </div>

      {/* Clear button */}
      <button
        type='button'
        onClick={clear}
        className='ml-auto block rounded-lg border border-zinc-800 px-4 py-1.5 text-sm uppercase tracking-wide'
      >
        Clear
      </button>
    </div>
  );
};

/**
 * @author vehktaur
 * @component SignatureMaker
 * @description Renders a signature input (via typing) onto a canvas and returns the base64 image.
 *
 * @param {Object} props
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.name - Field name for RHF Controller
 * @param {boolean} props.disabled - Disable or enable input
 * @param {string} props.errorMsg - Custom input error message
 */
export default function SignatureMaker({
  name,
  disabled = false,
  required = true,
  errorMsg,
  className,
}) {
  return (
    <Controller
      name={name}
      rules={{ disabled, required: { value: required, message: errorMsg } }}
      render={({ field: { onChange } }) => (
        <Comp
          className={className}
          onChange={(signature) => onChange(signature)}
        />
      )}
    />
  );
}
